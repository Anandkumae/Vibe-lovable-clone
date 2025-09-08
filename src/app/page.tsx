"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "sonner";


const Page = () => {
  const router = useRouter()
  const [value, setValue] = useState("");

  const trpc = useTRPC();
  const createMessage = useMutation(trpc.messages.create.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      router.push(`/projects/${data.id}`)
    },
  }))
    

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button disabled={createMessage.isPending} onClick={() => createMessage.mutate({ value: value })} >
        Invoke Backgroud Job
      </Button>
    </div>
  )
}

export default Page;