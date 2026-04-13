"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PrimeAuthStep =
  | "signin"
  | "verify-identity"
  | "forgot-password"
  | "verify-code"
  | "create-password"
  | "password-updated";

export default function PrimeAuthFlow() {
  const router = useRouter();
  const [step, setStep] = useState<PrimeAuthStep>("signin");
  const [email, setEmail] = useState("John@investor.com");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(true);
  const [otp, setOtp] = useState(["1", "2", "3", "4", "5", "6"]);

  const handleOtpChange = (value: string, index: number) => {
    const cleanValue = value.replace(/[^0-9]/g, "").slice(0, 1);
    const updated = [...otp];
    updated[index] = cleanValue;
    setOtp(updated);

    if (cleanValue && index < 5) {
      const nextInput = document.getElementById(
        `prime-auth-otp-${index + 1}`
      ) as HTMLInputElement | null;
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(
        `prime-auth-otp-${index - 1}`
      ) as HTMLInputElement | null;
      prevInput?.focus();
    }
  };

  const renderCardContent = () => {
    if (step === "signin") {
      return (
        <>
          <div className="prime-auth-v1-logo-row">
            <img
              src="/logo.png"
              alt="Logo"
              className="prime-auth-v1-logo"
            />
          </div>

          <div className="prime-auth-v1-title">Sign In</div>
          <p className="prime-auth-v1-subtitle">
            Access your investor dashboard.
          </p>

          <div className="prime-auth-v1-field-wrap">
            <label className="prime-auth-v1-label">Email Address</label>
            <input
              type="email"
              className="prime-auth-v1-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="John@investor.com"
            />
          </div>

          <div className="prime-auth-v1-field-wrap">
            <label className="prime-auth-v1-label">Password</label>
            <div className="prime-auth-v1-password-shell">
              <input
                type="password"
                className="prime-auth-v1-input prime-auth-v1-input-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <span className="prime-auth-v1-password-eye">◉</span>
            </div>
          </div>

          <div className="prime-auth-v1-meta-row">
            <label className="prime-auth-v1-checkbox-row">
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
              />
              <span>Remember this device</span>
            </label>

            <button
              type="button"
              className="prime-auth-v1-inline-link"
              onClick={() => setStep("forgot-password")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="button"
            className="prime-auth-v1-primary-btn"
            onClick={() => {
              // Simulate authentication success
              document.cookie = "token=demo-token; path=/; max-age=86400"; // 24 hours
              router.push("/dashboard");
            }}
          >
            Sign In
          </button>

          <div className="prime-auth-v1-or-row">
            <span className="prime-auth-v1-or-line" />
            <span className="prime-auth-v1-or-text">OR</span>
            <span className="prime-auth-v1-or-line" />
          </div>

          <div className="prime-auth-v1-social-row">
            <button type="button" className="prime-auth-v1-secondary-btn">
              <span className="prime-auth-v1-provider-icon prime-auth-v1-provider-google">
                G
              </span>
              Continue with Google
            </button>

            <button type="button" className="prime-auth-v1-secondary-btn">
              <span className="prime-auth-v1-provider-icon">◧</span>
              Continue with OTP
            </button>
          </div>

          <p className="prime-auth-v1-bottom-copy">
            Don&apos;t have an account?{" "}
            <button type="button" className="prime-auth-v1-inline-link">
              Create Account
            </button>
          </p>

          <p className="prime-auth-v1-footer-text">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </>
      );
    }

    if (step === "verify-identity") {
      return (
        <>
          <div className="prime-auth-v1-logo-row">
            <img
              src="/logo.png"
              alt="Logo"
              className="prime-auth-v1-logo"
            />
          </div>

          <div className="prime-auth-v1-title">
            Verify Your Identity
          </div>
          <p className="prime-auth-v1-subtitle prime-auth-v1-subtitle-tight">
            Enter the code sent to your registered email for login.
          </p>

          <div className="prime-auth-v1-field-wrap" style={{marginTop:'30px'}}>
            <label className="prime-auth-v1-label">Enter Code</label>
            <div className="prime-auth-v1-otp-row prime-auth-v1-otp-row-short">
              {otp.slice(0, 6).map((digit, index) => (
                <input
                  key={index}
                  id={`prime-auth-verify-identity-${index}`}
                  type="text"
                  inputMode="numeric"
                  className="prime-auth-v1-otp-input"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="prime-auth-v1-primary-btn"
            onClick={() => {
              // Simulate authentication success
              document.cookie = "token=demo-token; path=/; max-age=86400"; // 24 hours
              router.push("/dashboard");
            }}
          >
            Verify & Continue
          </button>

          <button
            type="button"
            className="prime-auth-v1-center-link"
            onClick={() => setStep("signin")}
          >
            Back to Sign In
          </button>

          <p className="prime-auth-v1-footer-text prime-auth-v1-footer-text-compact">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </>
      );
    }

    if (step === "forgot-password") {
      return (
        <>
          <div className="prime-auth-v1-logo-row">
            <img
              src="/logo.png"
              alt="Logo"
              className="prime-auth-v1-logo"
            />
          </div>

          <div className="prime-auth-v1-title">
            Forgot Password
          </div>
          <p className="prime-auth-v1-subtitle prime-auth-v1-subtitle-tight">
            Enter your registered email to receive a secure reset link.
          </p>

          <div className="prime-auth-v1-field-wrap" style={{marginTop:'30px'}}>
            <label className="prime-auth-v1-label">Email Address</label>
            <input
              type="email"
              className="prime-auth-v1-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@email.com"
            />
          </div>

          <button
            type="button"
            className="prime-auth-v1-primary-btn"
            onClick={() => setStep("verify-code")}
          >
            Send Instructions
          </button>

          <button
            type="button"
            className="prime-auth-v1-center-link"
            onClick={() => setStep("signin")}
          >
            Back to Sign In
          </button>

          <p className="prime-auth-v1-footer-text prime-auth-v1-footer-text-compact">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </>
      );
    }

    if (step === "verify-code") {
      return (
        <>
          <div className="prime-auth-v1-logo-row">
            <img
              src="/logo.png"
              alt="Logo"
              className="prime-auth-v1-logo"
            />
          </div>

          <div className="prime-auth-v1-title">
            Verify Code
          </div>
          <p className="prime-auth-v1-subtitle prime-auth-v1-subtitle-tight">
            Enter the 6-digit code sent to your phone or email
            <br />
            <span className="prime-auth-v1-subtitle-email">
              john***@email.com
            </span>
          </p>

          <div className="prime-auth-v1-field-wrap">
            <label className="prime-auth-v1-label">Enter OTP</label>
            <div className="prime-auth-v1-otp-row">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`prime-auth-otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  className="prime-auth-v1-otp-input"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="prime-auth-v1-primary-btn"
            onClick={() => setStep("create-password")}
          >
            Verify Code
          </button>

          <button type="button" className="prime-auth-v1-mini-link" style={{fontSize:'11px'}}>
           <span style={{color:'grey'}}>Resend in</span>  48 sec
          </button>

          <button
            type="button"
            className="prime-auth-v1-center-link"
            onClick={() => setStep("signin")}
          >
            Back to Log In
          </button>

          <p className="prime-auth-v1-footer-text prime-auth-v1-footer-text-compact">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </>
      );
    }

    if (step === "create-password") {
      return (
        <>
          <div className="prime-auth-v1-logo-row">
            <img
              src="/logo.png"
              alt="Logo"
              className="prime-auth-v1-logo"
            />
          </div>

          <div className="prime-auth-v1-title">
            Create New Password
          </div>
          <p className="prime-auth-v1-subtitle prime-auth-v1-subtitle-tight">
            Set a strong password to secure your account.
          </p>

          <div className="prime-auth-v1-field-wrap">
            <label className="prime-auth-v1-label">New Password</label>
            <div className="prime-auth-v1-password-shell">
              <input
                type="password"
                className="prime-auth-v1-input prime-auth-v1-input-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter password"
              />
              <span className="prime-auth-v1-password-eye">◉</span>
            </div>
            <div className="prime-auth-v1-strength-wrap">
              <div className="prime-auth-v1-strength-track">
                <div className="prime-auth-v1-strength-fill" />
              </div>
              <span className="prime-auth-v1-strength-text">Strong</span>
            </div>
          </div>

          <div className="prime-auth-v1-field-wrap">
            <label className="prime-auth-v1-label">Confirm Password</label>
            <div className="prime-auth-v1-password-shell">
              <input
                type="password"
                className="prime-auth-v1-input prime-auth-v1-input-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter confirm password"
              />
              <span className="prime-auth-v1-password-eye">◉</span>
            </div>
          </div>

          <div className="prime-auth-v1-password-rules">
            <div className="prime-auth-v1-password-rule prime-auth-v1-password-rule-ok">
              <span>✓</span> At least 8 characters long
            </div>
            <div className="prime-auth-v1-password-rule prime-auth-v1-password-rule-ok">
              <span>✓</span> Mix of uppercase & lowercase
            </div>
            <div className="prime-auth-v1-password-rule prime-auth-v1-password-rule-ok">
              <span>✓</span> At least one number
            </div>
            <div className="prime-auth-v1-password-rule">
              <span>○</span> At least one special character
            </div>
          </div>

          <button
            type="button"
            className="prime-auth-v1-primary-btn"
            onClick={() => setStep("password-updated")}
          >
            Reset Password
          </button>

          <p className="prime-auth-v1-footer-text prime-auth-v1-footer-text-compact">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </>
      );
    }

    return (
      <>
        <div className="prime-auth-v1-logo-row">
          <img
            src="/logo.png"
            alt="Logo"
            className="prime-auth-v1-logo"
          />
        </div>

        <div className="prime-auth-v1-success-shell">
          <div className="prime-auth-v1-success-icon">✓</div>
          <div className="prime-auth-v1-title">Password Updated</div>
          <p className="prime-auth-v1-subtitle prime-auth-v1-subtitle-tight">
            Your password has been reset successfully.
            <br />
            You can now use your new credentials to access your account.
          </p>
        </div>

        <button
          type="button"
          className="prime-auth-v1-primary-btn"
          onClick={() => setStep("signin")}
        >
          Go to Sign In
        </button>

        <p className="prime-auth-v1-footer-text prime-auth-v1-footer-text-compact">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </>
    );
  };

  return (
    <section className="prime-auth-v1-page-shell">
      <div className="prime-auth-v1-layout">
        <div className="prime-auth-v1-card">{renderCardContent()}</div>

       
      </div>
    </section>
  );
}