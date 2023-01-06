export type PrimitiveProject ={
    name:string
    pathToPreview:string
    shortDescripttion: string
    buildTools:string[]
    githubLink:string
    visitLink:string
}

export type Project = PrimitiveProject &{id:string}