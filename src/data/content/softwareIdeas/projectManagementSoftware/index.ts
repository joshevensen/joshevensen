import { RowType } from "@/data/enums/RowType.enum";
import { softwareIdea } from "@/data/models/SoftwareIdea";

const projectManagementSoftware = new softwareIdea(
  "Project Management Software",
  ""
);

projectManagementSoftware.publishIdea();

const tasksTable = "tasks";
projectManagementSoftware.addTable(tasksTable);
projectManagementSoftware.addDefaultRows(tasksTable);
projectManagementSoftware.addRow(tasksTable, "label", RowType.VarChar);
projectManagementSoftware.addRow(tasksTable, "description", RowType.Text, true);

const usersTable = "users";
projectManagementSoftware.addTable(usersTable);
projectManagementSoftware.addDefaultRows(usersTable);
projectManagementSoftware.addRow(usersTable, "first_name", RowType.VarChar);

export default projectManagementSoftware;
