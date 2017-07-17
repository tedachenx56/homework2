import React, {	Component } from 'react';

class Pagination extends Component {
	render() {
		return(
							<nav aria-label="Page navigation">
								<ul className="pagination" id="newspage" >
									<li>
										<a  aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li>
										<a >1</a>
									</li>
									<li>
										<a >2</a>
									</li>
									<li>
										<a >3</a>
									</li>
									<li>
										<a >4</a>
									</li>
									<li>
										<a >5</a>
									</li>

									<li>
										<a  aria-label="Next">
											<span aria-hidden="true">&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>
		);
	}
}

export default Pagination;

