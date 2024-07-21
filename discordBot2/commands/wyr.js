const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wyr')
		.setDescription('Creates a "Would you rather" question'),
	async execute(interaction) {
        let wyrMessages = ['**Commit murder** or **Be accused of murder**?','**Be deaf** or **Loose all knowledge of language?**','**Have crippling depression** or **Never speak to another human again**','**Go forward in time** or **Go back in time**','**Date Mr. Logan** or **Have 10 hours of homework nightly**','**Kill all of humanity** or **Die**','**Never stop moaning** or **Say all of your thoughts out loud**','**Be in 10 degree weather with only a t-shirt** or **Be in 100 degree weather with a coat**','**Lose the ability to speak** or **Be tone deaf**','**Spend 20 years in prison** or **Die**','**Live a healthy life and die suddenly at 40** or **Live to 90 but die from chronic diseases**','**Not use discord for a month** or **Not have legs for a month**','**Be able to fly** or **Be able to swim really well and breath water**','**Write an essay** or **Write a long mathematical proof**','**Be 10 years old permanently** or **Be 70 years old permanently**','**Be a botanophile** or **Be vegan**']
        let wyrCycleOne =  Math.floor(Math.random() * (wyrMessages.length));

        const wyrEmbed = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('?')
            .addFields(
            { name: `Would you rather:\n${wyrMessages[wyrCycleOne]}`, value: `** **`, inline: false },
        )
        .setFooter(`currently questioning my existence, Response Number: ${wyrCycleOne+1}/${wyrMessages.length}`)
		await interaction.reply({ embeds: [wyrEmbed] });
	},
};