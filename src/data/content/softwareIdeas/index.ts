import { softwareIdea } from "@/data/models/SoftwareIdea";
import budgetSoftware from "./budget-software";
import projectManagementSoftware from "./projectManagementSoftware";

const softwareIdeas: softwareIdea[] = [];

if (budgetSoftware.publish) {
  softwareIdeas.push(budgetSoftware);
}

if (projectManagementSoftware.publish) {
  softwareIdeas.push(projectManagementSoftware);
}

export default softwareIdeas;
