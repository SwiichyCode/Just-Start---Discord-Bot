const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Select one random value from a list of values.")
    .addStringOption((option) =>
      option
        .setName("values")
        .setDescription("Enter the list of values separated by commas")
        .setRequired(true)
    ),
  async execute(interaction) {
    const values = interaction.options.getString("values").split(",");
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return interaction.reply({
      content: `The random value is: ${randomValue}`,
      ephemeral: true,
    });
  },
};
