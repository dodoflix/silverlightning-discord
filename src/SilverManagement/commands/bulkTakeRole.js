const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

module.exports = {
    name: "BulkTakeRole",
    category: "Role Management",
    description: "Takes from all users a specific role..",
    permission: Permissions.FLAGS.MANAGE_ROLES,
    data: new SlashCommandBuilder()
        .setName('bulktakerole')
        .setDescription('Takes all users a specific role.')
        .addRoleOption(option => option.setName('role').setDescription('The role to be assigned.').setRequired(true)),
    async execute(interaction) {
        const role = interaction.options.getRole('role');
        if (!interaction.guild.roles.cache.filter(target => target === role)) {
            return interaction.reply({
                content: `${role.name} couldn't found in this guild.`
            });
        }
        interaction.guild.members.cache.each(member => {
            member.roles.remove(role);
        });
        return interaction.reply({
            content: `<@&${role.id}> role taken from all users.`
        });
    }
}