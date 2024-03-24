import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white px-6 py-9 overflow-hidden"
    >
      <FaRegFileAlt />

      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0  ">
        <div className="flex items-center justify-between px-6 py-5 mb-8">
          <h5 className="px-2 flex justify-start">{data.filesize}</h5>
          <span
            className={`w-7 h-7 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } rounded-full flex items-center justify-center`}
          >
            {data.close ? (
              <MdClose />
            ) : (
              <TbDownload size=".7em" color="#ffffff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`footer absolute left-0 bottom-0 w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h3 className="text-xs font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
