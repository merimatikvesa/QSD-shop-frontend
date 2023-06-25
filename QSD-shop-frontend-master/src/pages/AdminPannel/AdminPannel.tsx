import styles from "./AdminPannel.module.css";
import userAvatar from "../../images/userAvatar.png";
import { AiOutlineDown } from "react-icons/ai";
import { GrProductHunt } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { TbBrandLoom } from "react-icons/tb";
import { IoMdColorPalette } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { SiZenn } from "react-icons/si";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const AdminPannel = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <div
          className={
            menuOpen ? styles.NavIconsContainer : styles.NavIconsContainerClosed
          }
        >
          <div className={styles.NavAdminDiv}>
            <div className={styles.AdminDiv}>
              <p
                className={menuOpen ? styles.adminText : styles.adminTextClosed}
              >
                Admin
              </p>
              <p className={menuOpen ? styles.adminDot : styles.adminDotClosed}>
                .
              </p>
            </div>
            <div
              className={menuOpen ? styles.AdminIcon : styles.AdminIconClosed}
            >
              <BiMenuAltRight
                className={styles.NavIconHead}
                onClick={toggleMenu}
              ></BiMenuAltRight>
            </div>
          </div>
          <div className={styles.NavIconsDiv}>
            <GrProductHunt className={styles.NavIcon}></GrProductHunt>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Products
            </p>
          </div>
          <div className={styles.NavIconsDiv}>
            <FiShoppingBag className={styles.NavIcon}></FiShoppingBag>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Orders
            </p>
          </div>
          <div className={styles.NavIconsDiv}>
            <BiCategory className={styles.NavIcon}></BiCategory>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Categories
            </p>
          </div>
          <div className={styles.NavIconsDiv}>
            <TbBrandLoom className={styles.NavIcon}></TbBrandLoom>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Brands
            </p>
          </div>
          <div className={styles.NavIconsDiv}>
            <IoMdColorPalette className={styles.NavIcon}></IoMdColorPalette>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Colors
            </p>
          </div>
          <div className={styles.NavIconsDiv}>
            <SiZenn className={styles.NavIcon}></SiZenn>
            <p className={menuOpen ? styles.descr : styles.descrClosed}>
              Sizes
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.Header}>
          <p>Categories</p>
          <div className={styles.AvatarDiv}>
            <img src={userAvatar} className={styles.AvatarSlika}></img>
            <p>Ime i prezime</p>
            <AiOutlineDown></AiOutlineDown>
          </div>
        </div>
        <div className={styles.AddProductDiv}>
          <IoMdAddCircle className={styles.AddCircle}></IoMdAddCircle>
          <p className={styles.addProductText}>Add new Product</p>
        </div>
        <div className={styles.TableDiv}>
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Created at</th>
              <th>First image</th>
              <th>Options</th>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>
                  <div className={styles.ButtonsDiv1}>
                    <div className={styles.ButtonEdit}>
                      <div className={styles.buttonDiv}>
                        <AiOutlineEdit
                          className={styles.ButtonIcon}
                        ></AiOutlineEdit>
                      </div>
                      <p>Edit</p>
                    </div>
                    <div className={styles.ButtonDelete}>
                      <div className={styles.buttonDiv}>
                        <MdDeleteOutline
                          className={styles.ButtonIcon}
                        ></MdDeleteOutline>
                      </div>
                      <p>Delete</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.PageDisplayDiv}>
          <button className={styles.PageDisplayButton}>
            <AiOutlineLeft></AiOutlineLeft>
          </button>
          <button className={styles.PageDisplayButton}>
            <AiOutlineRight></AiOutlineRight>
          </button>
          <select className={styles.PageDisplaySelect}>
            <option>Show 20</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default AdminPannel;
