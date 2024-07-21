const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
let freearray = require('C:/Code Workspaces/Birch/getsheet.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frees')
		.setDescription('lists frees')
        .addStringOption(option => 
            option.setName('day')
            .setDescription('Pick a day')
            .setRequired(true)
            .addChoice('Monday', 'monday')
            .addChoice('Tuesday', 'tuesday')
            .addChoice('Wednesday', 'wednesday')
            .addChoice('Thursday', 'thursday')
            .addChoice('Friday', 'friday')),
	async execute(interaction) {

        const freeDay = interaction.options.getString('day');
            if (freeDay==='monday') {
                const mondayEmbed = new MessageEmbed()
                .setColor('#00FFFF')
                .setTitle('Frees')
                .addFields(
                    { name: 'Monday', value: `** **\n**8:15-9:00**\n${global.globalt[0][0]}\n\n**9:00-9:45**\n${global.globalt[1][0]}\n\n**Advisory**\nNobody\n\n**10:00-10:45**\n${global.globalt[2][0]}\n\n**10:45-11:30**\n${global.globalt[3][0]}\n\n**11:30-12:15**\n${global.globalt[4][0]}\n\n**12:15-1:00**\n${global.globalt[5][0]}\n\n**1:00-1:45**\n${global.globalt[6][0]}\n\n**1:45-2:30**\n${global.globalt[7][0]}\n\n**2:30-3:15**\n${global.globalt[8][0]}`, inline: false },
                )
                .setFooter(`current time: i have no fucking clue`)
		        await interaction.reply({ embeds: [mondayEmbed] });
            } else if (freeDay==='tuesday') {
                const tuesdayEmbed = new MessageEmbed()
                .setColor('#00FFFF')
                .setTitle('Frees')
                .addFields(
                    { name: 'Tuesday', value: `** **\n**8:15-9:00**\n${global.globalt[0][1]}\n\n**9:00-9:45**\n${global.globalt[1][1]}\n\n**Advisory**\nNobody\n\n**10:00-10:45**\n${global.globalt[2][1]}\n\n**10:45-11:30**\n${global.globalt[3][1]}\n\n**11:30-12:15**\n${global.globalt[4][1]}\n\n**12:15-1:00**\n${global.globalt[5][1]}\n\n**1:00-1:45**\n${global.globalt[6][1]}\n\n**1:45-2:30**\n${global.globalt[7][1]}\n\n**2:30-3:15**\n${global.globalt[8][1]}`, inline: false },
                )
                .setFooter(`current time: i have no fucking clue`)
                await interaction.reply({ embeds: [tuesdayEmbed] })
            } else if (freeDay==='wednesday') {
                const wednesdayEmbed = new MessageEmbed()
                .setColor('#00FFFF')
                .setTitle('Frees')
                .addFields(
                    { name: 'Wednesday', value: `** **\n**8:15-9:00**\n${global.globalt[0][2]}\n\n**9:00-9:45**\n${global.globalt[1][2]}\n\n**Advisory**\nNobody\n\n**10:00-10:45**\n${global.globalt[2][2]}\n\n**10:45-11:30**\n${global.globalt[3][2]}\n\n**11:30-12:15**\n${global.globalt[4][2]}\n\n**12:15-1:00**\n${global.globalt[5][2]}\n\n**1:00-1:45**\n${global.globalt[6][2]}\n\n**1:45-2:30**\n${global.globalt[7][2]}\n\n**2:30-3:15**\n${global.globalt[8][2]}`, inline: false },
                )
                .setFooter(`current time: i have no fucking clue`)
                await interaction.reply({ embeds: [wednesdayEmbed] })
            } else if (freeDay==='thursday') {
                const thursdayEmbed = new MessageEmbed()
                .setColor('#00FFFF')
                .setTitle('Frees')
                .addFields(
                    { name: 'Thursday', value: `** **\n**8:15-9:00**\n${global.globalt[0][3]}\n\n**9:00-9:45**\n${global.globalt[1][3]}\n\n**Advisory**\nNobody\n\n**10:00-10:45**\n${global.globalt[2][3]}\n\n**10:45-11:30**\n${global.globalt[3][3]}\n\n**11:30-12:15**\n${global.globalt[4][3]}\n\n**12:15-1:00**\n${global.globalt[5][3]}\n\n**1:00-1:45**\n${global.globalt[6][3]}\n\n**1:45-2:30**\n${global.globalt[7][3]}\n\n**2:30-3:15**\n${global.globalt[8][3]}`, inline: false },
                )
                .setFooter(`current time: i have no fucking clue`)
                await interaction.reply({ embeds: [thursdayEmbed] })
            } else if (freeDay==='friday') {
                const fridayEmbed = new MessageEmbed()
                .setColor('#00FFFF')
                .setTitle('Frees')
                .addFields(
                    { name: 'Friday', value: `** **\n**8:15-9:00**\n${global.globalt[0][4]}\n\n**9:00-9:45**\n${global.globalt[1][4]}\n\n**Advisory**\nNobody\n\n**10:00-10:45**\n${global.globalt[2][4]}\n\n**10:45-11:30**\n${global.globalt[3][4]}\n\n**11:30-12:15**\n${global.globalt[4][4]}\n\n**12:15-1:00**\n${global.globalt[5][4]}\n\n**1:00-1:45**\n${global.globalt[6][4]}\n\n**1:45-2:30**\n${global.globalt[7][4]}\n\n**2:30-3:15**\n${global.globalt[8][4]}`, inline: false },
                )
                .setFooter(`current time: i have no fucking clue`)
                await interaction.reply({ embeds: [fridayEmbed] })
            }

	},
};