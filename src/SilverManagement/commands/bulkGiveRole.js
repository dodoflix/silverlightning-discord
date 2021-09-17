const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

module.exports = {
    name: "BulkGiveRole",
    category: "Role Management",
    description: "Gives all users a specific role..",
    permission: Permissions.FLAGS.MANAGE_ROLES,
    data: new SlashCommandBuilder()
        .setName('bulkgiverole')
        .setDescription('Gives all users a specific role.')
        .addRoleOption(option => option.setName('role').setDescription('The role to be assigned.').setRequired(true)),
    async execute(interaction) {
        const role = interaction.options.getRole('role');
        const members = await interaction.guild.members.fetch();
        members.forEach(member => {
            member.roles.add(role);
        });
        return interaction.reply({
            content: `<@&${role.id}> role gived to all users.`
        });
    }
}