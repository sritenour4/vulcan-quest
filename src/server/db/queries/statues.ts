import { Query} from '../index';

const all = async () => Query('SELECT * FROM statues');
const one = async (id: string) => Query("SELECT * FROM statues WHERE statues.id = ?" [id]);
// need to update with db variable 
const post = async (id: string, content: string, location: string) => Query('INSERT INTO statues (id, content, location) values (?,?,?)', [id, content, location]);
const put = async (id: string, content: string) => Query("UPDATE statues SET content = ? WHERE id = ?", [id, content]);

const destroy = async (id: string) => Query("DELETE FROM statues WHERE userid = ?", [id]);

export default {
    all,
    one,
    post,
    put,
    destroy
};