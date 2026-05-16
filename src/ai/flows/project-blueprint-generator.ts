'use server';
/**
 * @fileOverview An AI agent that generates project blueprints, including database architecture and a feature roadmap.
 *
 * - generateProjectBlueprint - A function that handles the project blueprint generation process.
 * - ProjectBlueprintGeneratorInput - The input type for the generateProjectBlueprint function.
 * - ProjectBlueprintGeneratorOutput - The return type for the generateProjectBlueprint function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectBlueprintGeneratorInputSchema = z.object({
  projectIdea: z
    .string()
    .describe('A high-level description of the project idea.'),
  requirements: z
    .string()
    .describe(
      'Detailed high-level requirements for the project, such as target audience, key functionalities, and performance expectations.'
    ),
});
export type ProjectBlueprintGeneratorInput = z.infer<
  typeof ProjectBlueprintGeneratorInputSchema
>;

const FeatureSchema = z.object({
  name: z.string().describe('The name of the feature.'),
  description: z.string().describe('A brief description of the feature.'),
});

const ProjectBlueprintGeneratorOutputSchema = z.object({
  databaseArchitecture: z
    .string()
    .describe(
      'Suggested database architecture for the project, including type (e.g., PostgreSQL, MongoDB), scaling considerations, and reasons for choice.'
    ),
  featureRoadmap: z
    .array(FeatureSchema)
    .describe('A list of core features for the project roadmap, with names and descriptions.'),
});
export type ProjectBlueprintGeneratorOutput = z.infer<
  typeof ProjectBlueprintGeneratorOutputSchema
>;

export async function generateProjectBlueprint(
  input: ProjectBlueprintGeneratorInput
): Promise<ProjectBlueprintGeneratorOutput> {
  return projectBlueprintGeneratorFlow(input);
}

const projectBlueprintPrompt = ai.definePrompt({
  name: 'projectBlueprintGeneratorPrompt',
  input: {schema: ProjectBlueprintGeneratorInputSchema},
  output: {schema: ProjectBlueprintGeneratorOutputSchema},
  prompt: `You are an expert software architect and product manager specializing in database design and feature roadmapping.
Your task is to analyze a project idea and its requirements and suggest an optimal database architecture and a core feature roadmap.

Project Idea: {{{projectIdea}}}
Requirements: {{{requirements}}}

Based on the above, provide:
1. A concise explanation of the optimal database architecture, including the database type and any specific considerations (e.g., scalability, consistency, data types).
2. A list of key features for the project's roadmap. Each feature should have a name and a brief description.

Ensure your output is structured as a JSON object matching the provided schema, with 'databaseArchitecture' as a string and 'featureRoadmap' as an array of objects, each with 'name' and 'description'.`,
});

const projectBlueprintGeneratorFlow = ai.defineFlow(
  {
    name: 'projectBlueprintGeneratorFlow',
    inputSchema: ProjectBlueprintGeneratorInputSchema,
    outputSchema: ProjectBlueprintGeneratorOutputSchema,
  },
  async input => {
    const {output} = await projectBlueprintPrompt(input);
    if (!output) {
      throw new Error('Failed to generate project blueprint.');
    }
    return output;
  }
);
