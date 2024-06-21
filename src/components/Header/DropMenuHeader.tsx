"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustify, KeyRound, LogOut, UserPlus } from "lucide-react";

export const DropMenuHeader = () => {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <AlignJustify />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <KeyRound size={18} strokeWidth={1.2} /> Trocar senha
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <UserPlus size={18} strokeWidth={1.2} /> Cadastrar usuário
                    </div>
                </DropdownMenuItem>
                <hr className="border-0 h-px bg-gray-300 my-2"/>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <LogOut size={18} strokeWidth={1.2} /> Logout
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};