import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname.endsWith("login");

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <p className={styles.switchText}>
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                className={styles.switchBtn}
                onClick={() => navigate("/auth/signup")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className={styles.switchBtn}
                onClick={() => navigate("/auth/login")}
              >
                Log In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
