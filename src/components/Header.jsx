import React, { useState } from "react";
import elipsis from "../assets/icon-vertical-ellipsis.svg";
import logo from "../assets/logo/svg/logo-black.svg";
import iconDown from "../assets/icon-chevron-down.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import HeaderDropDown from "./HeaderDropDown";
import { useSelector } from "react-redux";
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(true);

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  return (
    <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
      <header className=" flex justify-between dark:text-white items-center  ">
        {/* Left Side  */}
        <div className=" flex items-center space-x-2  md:space-x-4">
          <img
            src={logo}
            alt=" Logo "
            className=" h-10 w-10 object-contain rounded-3xl cursor-pointer"
          />
          <h3 className=" md:text-2xl  hidden md:inline-block font-bold  font-sans">
            Story Board
          </h3>
          <div className=" flex items-center ">
            <h3 className=" truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans  ">
              Story Names
            </h3>
            <img
              src={openDropdown ? iconUp : iconDown}
              alt=" dropdown icon"
              className=" w-3 ml-2 cursor-pointer md:hidden"
              onClick={() => setOpenDropdown((state) => !state)}
            />
          </div>
        </div>

        {/* Right Side */}

        <div className=" flex space-x-4 items-center md:space-x-6 ">
          <button
            className=" button hidden md:block text-white outline-1 p-2 rounded-full bg-indigo-500"
            // onClick={() => {
            //   setIsTaskModalOpen((prevState) => !prevState);
            // }}
          >
            + Add New Task
          </button>
          <button
            // onClick={() => {
            //   setIsTaskModalOpen((prevState) => !prevState);
            // }}
            className=" button py-1 px-3 md:hidden "
          >
            +
          </button>

          <img
            // onClick={() => {
            //   setBoardType("edit");
            //   setOpenDropdown(false)
            //   setIsElipsisMenuOpen((prevState) => !prevState);
            // }}
            src={elipsis}
            alt="elipsis"
            className=" cursor-pointer h-6"
          />
          {/* {isElipsisMenuOpen && (
            <ElipsisMenu
              type="Boards"
              setOpenEditModal={setOpenEditModal}
              setOpenDeleteModal={setOpenDeleteModal}
            />
          )} */}
        </div>

        {openDropdown && (
          <HeaderDropDown
            setOpenDropdown={setOpenDropdown}
            // setIsBoardModalOpen={setIsBoardModalOpen}
          />
        )}
      </header>
      {/* {isTaskModalOpen && (
        <AddEditTaskModal
          setIsAddTaskModalOpen={setIsTaskModalOpen}
          type="add"
          device="mobile"
        />
      )} */}

      {/* {isBoardModalOpen && (
        <AddEditBoardModal
          setBoardType={setBoardType}
          type={boardType}
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          type="board"
          title={board.name}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      )} */}
    </div>
  );
};

export default Header;
