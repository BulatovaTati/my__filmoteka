import Pagination from 'tui-pagination';
import { options } from './options-pagination';
import Spinner from './spinner';

const pagination = new Pagination('pagination', options);
const spinner = new Spinner();

pagination.on('afterMove', onPaginationClick);

function onPaginationClick(e) {
  console.log(e);
  spinner.enable();
}
