const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const { time } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('date')
		.setDescription('tells date'),
	async execute(interaction) {
		const date = new Date();
    await interaction.reply({ content: `${date}.`, ephemeral: true })
	},
};