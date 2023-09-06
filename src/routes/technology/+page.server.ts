import type { PageServerLoad } from './$types';
import { skills_by_category } from './data';

export const load = (async () => {
    return {skills: skills_by_category.map((skill) => ({
        category: skill.category,
        technologies: skill.technologies,
        type_icon: skill.type_icon
    }))};
}) satisfies PageServerLoad;