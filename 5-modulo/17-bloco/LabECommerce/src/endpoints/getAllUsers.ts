import { Request, Response } from "express";
import { connection } from "../connection";

export const getAllUsers = async (req: Request, res: Response) => {
  const userList = await connection("labecommerce_users").select();

  if (!userList.length) {
    res.status(200).send("No users have been registered");
  } else {
    const userListWithPurchases = await Promise.all(
      userList.map(async (user) => {
        const userPurchases = await connection("labecommerce_purchases").where({
          user_id: user.id,
        });
        console.log("userPurchases", userPurchases);
        const completeUser = { ...user, purchases: userPurchases };

        // console.log("completeUser", completeUser);
        return completeUser;
      })
    );

    console.log("enviando o complete");

    res.status(200).send(userListWithPurchases);
  }
};

// const userPurchases = await connection("labecommerce_purchases").where({
//   user_id: userID,
// });
