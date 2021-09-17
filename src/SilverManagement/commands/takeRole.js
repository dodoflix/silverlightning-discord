const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

module.exports = {
    name: "TakeRole",
    category: "Role Management",
    description: "",
    permission: Permissions.FLAGS.MANAGE_ROLES,
    data: new SlashCommandBuilder()
        .setName('takerole')
        .setDescription('Take role')
        .addUserOption(option => option.setName('user').setDescription('User').setRequired(true))
        .addRoleOption(option => option.setName('role').setDescription('Role').setRequired(true)),
    async execute(interaction){
        const member = interaction.options.getMember('user');
        const role = interaction.options.getRole('role');
        if (!interaction.guild.members.cache.filter(target => target === member)) {
            return interaction.reply({
                content: `${member.tag} couldn't found in this guild.`,
                ephemeral: true
            });
        }
        if (!interaction.guild.roles.cache.filter(target => target === role)) {
            return interaction.reply({
                content: `${role.name} couldn't found in this guild.`
            });
        }
        await member.roles.remove(role).then(() => {
            return interaction.reply({
                content: `<@${member.id}> has been taken the role of <@&${role.id}>.`,
                ephemeral: true
            });
        });
    }
}