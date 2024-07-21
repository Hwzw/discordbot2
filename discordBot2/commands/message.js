const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('msg')
        .setDescription('dms a user anonymously')
        .addUserOption(option => option.setName('person').setDescription('Select a user to DM anonymously').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Send the message you wanna send').setRequired(true)),
    async execute(interaction) {
        const dmUser = interaction.options.getUser('person');
        const msg = interaction.options.getString('message');
        await interaction.reply({ content: `I DMed ${dmUser.tag}: ${msg}`, ephemeral: true })
        dmUser.send(msg)
    }
}