const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("membercount")
    .setDescription("Retrieve the number of members in a specified role.")
    .addStringOption((option) =>
      option
        .setName("role")
        .setDescription("Enter the name of the role")
        .setRequired(true)
        .addChoices(
          { name: "Front-end", value: "Front-end" },
          { name: "Back-end", value: "Back-end" },
          { name: "Full-stack", value: "Full-stack" },
          { name: "Dev-mobile", value: "Dev-mobile" },
          { name: "Dev-logiciel", value: "Dev-logiciel" },
          { name: "Sys-admin", value: "Sys-admin" },
          { name: "UI/UX", value: "UI/UX" }
        )
    ),
  async execute(interaction) {
    await interaction.guild.members.fetch();

    const roles = await interaction.guild.roles.fetch();
    const activeRole = interaction.options.getString("role");

    const findRole = roles.find((role) => role.name === activeRole);
    const roleMembers = findRole.members.size;

    return interaction.reply({
      content: `There are ${roleMembers} members in the ${activeRole} role.`,
      // ephemeral: true,
    });
  },
};
