/**[_type=="skills"]{
  _id,label,category,value
}*/

import { Skill, SkillCategory } from "@/types/interfaces";
import { client } from "../../sanity/lib/client"

export async function getSkills(category:SkillCategory){
    const query = `
    *[_type=="skills" && category=="${category}" ]{
  _id,label,category,value
}
  `

  const data = await client.fetch(query)
  return data as Skill[];
}