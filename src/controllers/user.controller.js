import User from '../models/Users';
export async function getUsers(req, res) {
    try {
        const Users = await User.findAll();
        res.json({ data: Users });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function getOneUser(req, res) {
    try {
        const { email } = req.params;
        const user = await User.findOne({
            where: {
                email
            }
        });
        res.json({ data: user })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function createUser(req, res) {
    try {
        const { first_name, last_name, email, tel, date_of_birth } = req.body;
        let newUser = await User.create({
            first_name,
            last_name,
            email,
            tel,
            date_of_birth
        }, {
            fields: ['first_name',
                'last_name',
                'email',
                'tel',
                'date_of_birth']
        });
        if (newUser) {
            return res.json({
                message: 'User created succesfully',
                data: newUser
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function updateUser(req, res) {
    try {
        const email_get = req.params.email;
        const { first_name, last_name, email, tel, date_of_birth } = req.body;
        const users = await User.findAll({
            attributes: [
                'id',
                'first_name',
                'last_name',
                'email',
                'tel',
                'date_of_birth'
            ],
            where: {
                email: email_get
            }
        })
        if (users.length > 0) {
            users.forEach(user => {
                user.update({
                    first_name,
                    last_name,
                    email,
                    tel,
                    date_of_birth
                })
            });
        }
        return res.json({
            message: 'User updated succesfully',
            data: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
export async function deleteUser(req, res) {
    try {
        const { email } = req.params;
        const deleteRowCount = await User.destroy({
            where: {
                email
            }
        });
        res.json({
            message: 'User deleted succesfully',
            data: {
                count: deleteRowCount
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}