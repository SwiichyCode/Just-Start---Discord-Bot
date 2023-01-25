// create a vote message and send it to the channel

const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()

    .setName("vote")
    .setDescription("Create a vote message")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addStringOption((option) =>
      option.setName("vote").setDescription("Enter your vote").setRequired(true)
    ),
  async execute(interaction) {
    const vote = interaction.options.getString("vote");

    // const embed = new MessageEmbed()
    //   .setColor("#0099ff")
    //   .setTitle("Vote")
    //   .setDescription(vote)
    //   .setTimestamp();

    const message = await interaction.channel.send(vote);
    await message.react("👍");
    await message.react("👎");
  },
};
