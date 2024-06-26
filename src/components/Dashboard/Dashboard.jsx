import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@bdenzer/react-modal";
import creditCard from "../../assets/card.png";
import "./Dashboard.css";
import JamesRadford from "../AllUserTransactions/JamesRadford";
import MichelleWilliams from "../AllUserTransactions/MichelleWilliams";
import JamesSterlingBarger from "../AllUserTransactions/JamesSterlingBarger";
import JessicalKevin from "../AllUserTransactions/JessicalKevin";
import VaroneEmilyAnne from "../AllUserTransactions/VaroneEmilyAnne";
import AllisonDean from "../AllUserTransactions/AllisonDean";
import SandraAnnetteBullock from "../AllUserTransactions/SandraAnnetteBullock";
import CaliCarterAnn from "../AllUserTransactions/CaliCarterAnn";
import PhillipZapata from "../AllUserTransactions/PhillipZapata";
import SamathanIrvin from "../AllUserTransactions/SamathanIrvin";
import GraceChris from "../AllUserTransactions/GraceChris";
import EduardMartirosyan from "../AllUserTransactions/EduardMartirosyan";
import SarahTyson from "../AllUserTransactions/SarahTyson";
import AngelaMcDaniel from "../AllUserTransactions/AngelaMcDaniel";
import BallesterosKayla from "../AllUserTransactions/BallesterosKayla";
import MelissaMarie from "../AllUserTransactions/MelissaMarie";
import KevinThoms from "../AllUserTransactions/KevinThoms";

export default function Dashboard() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [recipientAccount, setRecipientAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // get the user data

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // remove the user data
    navigate("/login");
  };

  const closeModal = () => {
    setShouldShowModal(false);
  };

  const openModal = () => {
    setShouldShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate recipientAccount and amount
    const newErrors = {};

    if (!recipientAccount) {
      newErrors.recipientAccount = "Recipient Account is required";
    }

    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount)) {
      newErrors.amount = "Amount must be a number";
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form if there are no errors
      setSuccessMessage(
        "You can't make a transaction at the moment, please contact the bank to fix this immediately."
      );
      setErrors({});
    } else {
      // Update the errors state with validation errors
      setErrors(newErrors);
    }
  };
  //   const { match } = props;
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <img
          className="Logo"
          src="https://i.imgur.com/HFIErui.png"
          alt="logo"
        />
        <button className="logout_btn" onClick={signOut} href="#">
          Logout
        </button>
      </div>
      <div className="main-account-balance">
        <div className="account_text">
          <h2>
            Welcome back,
            <br /> {user.name} {user.jointAccountName && "& Joseph Zarcone"}
          </h2>
        </div>
        <div className="account-details">
          <h2>Available Balance</h2>
          <span className="price">${user.amount}</span>
          {user.checkingAccountAmount && (
            <div className="savingBox" style={{paddingBottom: 12}}>
              <h2 className="saving_account">Current Account</h2>
              <h2 className="saving_account_name">
                <span className="price saving_account_price">
                  ${user.checkingAccountAmount}
                </span>
              </h2>
            </div>
          )}
          {user.savingAccountAmount && (
            <div className="savingBox">
              <h2 className="saving_account">Saving Account</h2>
              <h2 className="saving_account_name">
                {user.savingAccountName}{" "}
                <span className="price saving_account_price">
                  ${user.savingAccountAmount}
                </span>
              </h2>
            </div>
          )}
          
        </div>
        <div className="transaction_container">
          {user.id === 100000 && <PhillipZapata />} {/* {*testingAccount*} */}
          {user.id === 1 && <JamesRadford />}
          {user.id === 2 && <MichelleWilliams />}
          {user.id === 3 && <JamesSterlingBarger />}
          {user.id === 4 && <JessicalKevin />}
          {user.id === 5 && <VaroneEmilyAnne />}
          {user.id === 6 && <AllisonDean />}
          {user.id === 7 && <SandraAnnetteBullock />}
          {user.id === 8 && <CaliCarterAnn />}
          {user.id === 9 && <PhillipZapata />}
          {user.id === 10 && <SamathanIrvin />}
          {user.id === 11 && <GraceChris />}
          {user.id === 12 && <EduardMartirosyan />}
          {user.id === 13 && <SarahTyson />}
          {user.id === 14 && <AngelaMcDaniel />}
          {user.id === 15 && <BallesterosKayla />}
          {user.id === 16 && <MelissaMarie />}
          {user.id === 17 && <KevinThoms />}
        </div>
      </div>
      {user.isCard === true && 
        <div className="credit_card">
          <img src={creditCard} alt="creditCard" />
          <span>{user.cardName}</span>
        </div>
      }
      <div className="account-footer">
        <div>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <span>Account</span>
        </div>
        <div onClick={() => openModal()}>
          <span>
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </span>
          <span>Transfer</span>
        </div>

        <div>
          <span>
            <i className="fa-solid fa-angles-down"></i>
          </span>
          <span>Deposit</span>
        </div>
        <div>
          <span>
            <i className="fa fa-money" aria-hidden="true"></i>
          </span>
          <span>Pay</span>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        shouldShowModal={shouldShowModal}
        title="Transfer Fund"
      >
        {successMessage && (
          <div
            style={{
              color: "red",
              padding: 5,
              fontSize: "18px",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <i className="fa-solid fa-triangle-exclamation"></i>{" "}
            {successMessage}
          </div>
        )}
        <form className="modal_form" onSubmit={handleSubmit}>
          <div>
            <label>Recipient Account</label>
            <input
              type="number"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
            />
            {errors.recipientAccount && (
              <div style={{ color: "red", marginTop: 10 }}>
                {errors.recipientAccount}
              </div>
            )}
          </div>
          <div>
            <label>Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errors.amount && (
              <div style={{ color: "red", marginTop: 10 }}>{errors.amount}</div>
            )}
          </div>
          <div>
            <button>Transfer</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
