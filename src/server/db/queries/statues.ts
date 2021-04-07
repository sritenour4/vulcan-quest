import { Query} from '../index';

const all = async () => Query('SELECT * FROM statues');
const one = async (id: string) => Query(`SELECT * FROM statues WHERE statues.id = ?`, [id]);
const post = async (id: string, location: string, title: string, information: string, artists: string, sponsor: string) => Query('INSERT INTO statues (id, location, title, information, artists, sponsor) values (?,?,?,?,?,?)', [id, location, title, information, artists, sponsor]);
const put = async (editedStatue: {location?: string, title?: string, information?: string, artists?: string, sponsor?: string }, id: string) => Query("UPDATE statues SET ? WHERE id = ?", [editedStatue, id]);
const destroy = async (id: string) => Query("DELETE FROM statues WHERE userid = ?", [id]);

export default {
    all,
    one,
    post,
    put,
    destroy
};