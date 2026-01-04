// src/pages/Auth.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
    const [mode, setMode] = useState("signup"); // "signup" | "login"

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const password = watch("password");
    const email = watch("email");

    async function onSubmit(data) {
        // UI-only for now (no Firebase/Auth yet)
        // You can replace this later with real auth + database logic.
        console.log("Auth form submitted:", { mode, ...data });
        alert(`${mode === "signup" ? "Sign up" : "Login"} submitted (UI only for now) ✅`);
        reset();
    }

    function switchMode(nextMode) {
        setMode(nextMode);
        reset();
    }

    return (
        <div className="page">
            <section className="section authCard">
                <h2 style={{ marginTop: 0 }}>{mode === "signup" ? "Create your Roamer account" : "Welcome back to Roamer"}</h2>
                <p className="muted" style={{ marginTop: 6 }}>
                    {mode === "signup"
                        ? "Sign up to save trips, manage bookings, and personalise your travel experience."
                        : "Log in to view your saved destinations and bookings."}
                </p>

                {/* Tabs */}
                <div className="tabs" style={{ marginTop: 12 }}>
                    <button
                        type="button"
                        className={`tab ${mode === "signup" ? "active" : ""}`}
                        onClick={() => switchMode("signup")}
                    >
                        Sign up
                    </button>
                    <button
                        type="button"
                        className={`tab ${mode === "login" ? "active" : ""}`}
                        onClick={() => switchMode("login")}
                    >
                        Login
                    </button>
                </div>

                {/* Social buttons (UI only) */}
                <div className="socialRow" style={{ marginTop: 10 }}>
                    <button
                        type="button"
                        className="btn ghost"
                        onClick={() => alert("Google sign-in coming soon ✅")}
                    >
                        Continue with Google
                    </button>
                    <button
                        type="button"
                        className="btn ghost"
                        onClick={() => alert("Microsoft sign-in coming soon ✅")}
                    >
                        Continue with Microsoft
                    </button>
                </div>

                <div className="divider">
                    <span>or</span>
                </div>

                {/* Form */}
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    {mode === "signup" && (
                        <>
                            <div className="grid2">
                                <label>
                                    First name
                                    <input
                                        className="input"
                                        {...register("firstName", { required: "First name is required" })}
                                        placeholder="e.g. Kamahl"
                                    />
                                    {errors.firstName && <small className="err">{errors.firstName.message}</small>}
                                </label>

                                <label>
                                    Last name
                                    <input
                                        className="input"
                                        {...register("lastName", { required: "Last name is required" })}
                                        placeholder="e.g. Mannings"
                                    />
                                    {errors.lastName && <small className="err">{errors.lastName.message}</small>}
                                </label>
                            </div>

                            <div className="grid2">
                                <label>
                                    Age
                                    <input
                                        className="input"
                                        type="number"
                                        min="13"
                                        {...register("age", {
                                            required: "Age is required",
                                            valueAsNumber: true,
                                            validate: (v) => (v >= 13 ? true : "You must be at least 13"),
                                        })}
                                        placeholder="e.g. 20"
                                    />
                                    {errors.age && <small className="err">{errors.age.message}</small>}
                                </label>

                                <label>
                                    Gender
                                    <select
                                        className="input"
                                        {...register("gender", { required: "Gender is required" })}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select…
                                        </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Non-binary">Non-binary</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                    {errors.gender && <small className="err">{errors.gender.message}</small>}
                                </label>
                            </div>

                            <label>
                                Username
                                <input
                                    className="input"
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: { value: 3, message: "Username must be at least 3 characters" },
                                        maxLength: { value: 20, message: "Username must be under 20 characters" },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+$/,
                                            message: "Only letters, numbers, dots, underscores and hyphens",
                                        },
                                    })}
                                    placeholder="e.g. roamer_kamahl"
                                />
                                {errors.username && <small className="err">{errors.username.message}</small>}
                            </label>
                        </>
                    )}

                    <label>
                        Email
                        <input
                            className="input"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            placeholder="e.g. you@example.com"
                        />
                        {errors.email && <small className="err">{errors.email.message}</small>}
                    </label>

                    {mode === "signup" && (
                        <label>
                            Verify email
                            <input
                                className="input"
                                type="email"
                                {...register("emailVerify", {
                                    required: "Please verify your email",
                                    validate: (v) => v === email || "Emails do not match",
                                })}
                                placeholder="Re-enter your email"
                            />
                            {errors.emailVerify && <small className="err">{errors.emailVerify.message}</small>}
                        </label>
                    )}

                    <label>
                        Password
                        <input
                            className="input"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                validate: (v) =>
                                    /[A-Z]/.test(v) && /[0-9]/.test(v)
                                        ? true
                                        : "Include at least 1 uppercase letter and 1 number",
                            })}
                            placeholder="••••••••"
                        />
                        {errors.password && <small className="err">{errors.password.message}</small>}
                    </label>

                    {mode === "signup" && (
                        <label>
                            Verify password
                            <input
                                className="input"
                                type="password"
                                {...register("passwordVerify", {
                                    required: "Please verify your password",
                                    validate: (v) => v === password || "Passwords do not match",
                                })}
                                placeholder="Re-enter your password"
                            />
                            {errors.passwordVerify && <small className="err">{errors.passwordVerify.message}</small>}
                        </label>
                    )}

                    <button className="btn" disabled={isSubmitting} type="submit">
                        {mode === "signup" ? "Create account" : "Login"}
                    </button>

                    <p className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                        {mode === "signup" ? (
                            <>
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    className="btn ghost"
                                    style={{ padding: "6px 10px", marginLeft: 6 }}
                                    onClick={() => switchMode("login")}
                                >
                                    Login
                                </button>
                            </>
                        ) : (
                            <>
                                Don’t have an account?{" "}
                                <button
                                    type="button"
                                    className="btn ghost"
                                    style={{ padding: "6px 10px", marginLeft: 6 }}
                                    onClick={() => switchMode("signup")}
                                >
                                    Sign up
                                </button>
                            </>
                        )}
                    </p>
                </form>
            </section>
        </div>
    );
}
