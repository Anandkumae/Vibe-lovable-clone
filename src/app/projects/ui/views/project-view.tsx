"use client";


import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Fragment } from "@/generated/prisma";
import { MessageContainer } from "@/modules/projects/ui/components/messages-container";
import { Suspense, useState } from "react";


interface Props {
    projectId: string;
    activeFragment: Fragment | null;
    setActiveFragment: (fragment: Fragment | null) => void;
};

export const ProjectView = ({ 
    projectId
}: Props) => {
    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
    


    return (
        <div>
            <ResizablePanelGroup direction="horizontal" >
                <ResizablePanel 
                    defaultSize={35}
                    minSize={20}
                    className="flex flex-col min-h-0"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <MessageContainer  
                            projectId={projectId}
                            activeFragment={activeFragment}
                            setActiveFragment={setActiveFragment}
                        />
                    </Suspense>
                </ResizablePanel>
                <ResizableHandle withHandle/>
                    <ResizablePanel 
                        defaultSize={65}
                        minSize={50}
                    >
                        Todo
                    </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}