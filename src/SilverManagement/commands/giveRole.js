const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

module.exports = {
    name: "GiveRole",
    category: "Role Management",
    description: "Delete a certain number of messages from one user or all users on this channel.",
    permission: Permissions.FLAGS.MANAGE_MESSAGES,
    data: new SlashCommandBuilder()
        .setName('giverole')
        .setDescription('Gives specified role to specified user.')
        .addUserOption(option => option.setName('user').setDescription('User who will get the role.').setRequired(true))
        .addRoleOption(option => option.setName('role').setDescription('Role for give.').setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.getMember('user');
        const role = interaction.options.getRole('role');
        await member.roles.add(role).then(() => {
            return interaction.reply({
                content: `<@${member.id}> has been given the role of <@&${role.id}>.`,
                ephemeral: true
            });
        });
    }
}