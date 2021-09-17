const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

// TODO GIVEROLE COMMAND

module.exports = {
    name: "ClearChat",
    category: "Chat Management",
    description: "Delete a certain number of messages from one user or all users on this channel.",
    permission: Permissions.FLAGS.MANAGE_MESSAGES,
    data: new SlashCommandBuilder()
        .setName('giverole')
        .setDescription('Gives specified role to specified user.')
        .addUserOption(option => option.setName('user').setDescription('User who will get the role.').setRequired(true))
        .addRoleOption(option => option.setName('role').setDescription('Role for give.').setRequired(true)),
    async execute(interaction){
        const user = interaction.options.getUser('user');
        const role = interaction.options.getRole('role');
        user.roles.add(role);
        return interaction.reply({
           content: `${role.name} gived to ${user.name}.`
        });
    }
}