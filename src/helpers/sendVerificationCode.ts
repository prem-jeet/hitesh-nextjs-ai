import { ApiResponse } from "./../types/ApiResponse";
import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";

export const sendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystery message verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.log("error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
};
