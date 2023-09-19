// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { projects, skills_by_category } from '$lib/data/data';

export const load = (async () => {
    return {posts: projects.map((project) => ({
        slug: project.slug,
        title: project.title,
        imagePath: project.imagePath
    })),
    skills: skills_by_category.map((skill) => ({
        category: skill.category,
        technologies: skill.technologies,
        type_icon: skill.type_icon
    }))};  
});