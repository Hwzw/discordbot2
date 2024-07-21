const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, Interaction } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('creates a poll')
        .addStringOption(option => option.setName('question').setDescription('Question for the poll').setRequired(true))
        .addStringOption(option => option.setName('option1').setDescription('Poll choice A').setRequired(true))
        .addStringOption(option => option.setName('option2').setDescription('Poll choice B').setRequired(true)),
    async execute(interaction) {
        const pollQuestion = interaction.options.getString('question');
        const optionOne = interaction.options.getString('option1');
        const optionTwo = interaction.options.getString('option2');
        const pollEmbed = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(`Poll: ${pollQuestion}`)
            .addFields(
                { name: 'Selection:', value: `A: **${optionOne}**\nB: **${optionTwo}**`}
            )
            .setFooter('i am not allowed an opionion :sbobing:')
        const message = await interaction.reply({ embeds: [pollEmbed], fetchReply: true })
            message.react('🇦');
            message.react('🇧');
    }
}