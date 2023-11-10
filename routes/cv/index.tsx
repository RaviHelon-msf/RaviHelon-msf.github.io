import { Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";

import Entry, { Role } from '$home/components/cv/entry.tsx';
import Cv from "$home/islands/Cv.tsx";
import MyHeader from "$home/components/MyHeader.tsx";

interface PageProps {
  params: {
    entries: Role[];
    edu: Role[];
  };
}

export const handler:Handlers = {
  async GET (res,ctx){
    console.log("Handler is working")
    try{
      const exp_data: Record<string, Role> = await import("$home/static/cv/entries.json", {with: {type: "json"}}).then((module)=>module.default || {});
      const edu_data: Record<string, Role> = await import("$home/static/cv/edu.json", {with: {type: "json"}}).then((module)=>module.default || {});
      
      const entries = Object.values(exp_data).map(role=>role);
      const edu = Object.values(edu_data).map(role=>role);

      const params = { entries, edu };
      return await ctx.render(params)
    }
    catch(error){
      console.error("Error loading JSON data:", error);
      return await ctx.render({status: 500, body: "Internal Server Error"});
    }
    
  }
}

export function CvPage(params: PageProps) {
    return (
      <>
        <MyHeader />
        <Cv {...params.data}/>
      </>
    
    ) ;
}

export default CvPage;
