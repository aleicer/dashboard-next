'use client';

import { SimpleWidget } from "@/components";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

  const inCart = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
          titles={inCart + ""}
          subtitle="Productos agregados"
          label="Contador"
          icon={<IoCartOutline size={70} className="text-green-500"/>}
          href="/dashboard/counter"
        />
        {/* <SimpleWidget /> */}
      </div>
  )
}
