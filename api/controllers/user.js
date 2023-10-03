import { db } from "../db.js";

export const getUser = (_, res) => {
    const q = "SELECT * FROM crud2.usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};