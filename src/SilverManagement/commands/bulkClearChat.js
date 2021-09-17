const {SlashCommandBuilder} = require('@discordjs/builders');
const {Permissions} = require("discord.js");

module.exports = {
    name: "BulkClearChat",
    category: "Chat Management",
    description: "Delete a certain number of messages from one user or all users from all channels.",
    permission: Permissions.FLAGS.MANAGE_MESSAGES,
    data: new SlashCommandBuilder()
        .setName('bulkclearchat')
        .setDescription('Delete a certain number of messages from one user or all users from all channels.')
        .addIntegerOption(option => option.setName('count').setDescription('How many messages should be deleted?').addChoice('10', 10).addChoice('25', 25).addChoice('50', 50).addChoice('75', 75).addChoice('100', 100))
        .addUserOption(option => option.setName('user').setDescription('Which user\'s messages should be deleted?')),
    async execute(interaction) {
        const count = interaction.options.getInteger('count') ?? 10;
        const user = interaction.options.getUser('user');
        const channels = (await interaction.guild.channels.fetch()).filter(channel => channel.type === 'GUILD_TEXT');
        let deletedMessageCount = 0;
        channels.forEach(channel => {
            channel.messages.fetch({limit: count}).then(messages => {
                switch (user !== null) {
                    case true:
                        const userMessages = messages.filter(i => i.author === user);
                        switch (userMessages.size >= 1) {
                            case true:
                                userMessages.forEach(message => {
                                    message.delete();
                                });
                                interaction.channel.send({
                                    content: `**${userMessages?.size}** messages from <@${user?.id}> have been deleted on the <#${channel.id}> channel.`
                                });
                                break;
                        }
                        break;
                    case false:
                        switch (messages.size >= 1) {
                            case true:
                                messages.forEach(message => {
                                    message.delete();
                                });
                                interaction.channel.send({
                                    content: `**${messages.size}** messages were deleted from the <#${channel.id}> channel.`
                                });
                                break;
                        }
                }
            });
        });
        return interaction.reply({
            content: `Deleting messages on **${channels.size}** channels.`,
            ephemeral: true
        });
    }
};