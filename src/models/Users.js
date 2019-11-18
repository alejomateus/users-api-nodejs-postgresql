import Sequialize from 'sequelize';
import { sequialize } from "../database/database";
const User = sequialize.define('users', {
    id: {
        type: Sequialize.INTEGER,
        primaryKey: true
    },
    first_name: {
        type: Sequialize.TEXT

    },
    last_name: {
        type: Sequialize.TEXT

    },
    email: {
        type: Sequialize.TEXT

    },
    tel: {
        type: Sequialize.TEXT

    },
    date_of_birth: {
        type: Sequialize.DATE

    }
}, {
        timestamps: false
    });
export default User;