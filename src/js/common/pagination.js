import Pagination from 'tui-pagination';
import { options } from './options-pagination';

const pagination = new Pagination('pagination', options);

pagination.on('afterMove', paginationScrollTop);

function paginationScrollTop(e) {
  console.log(e);
}
