import React, {	Component } from 'react';
import Pagination from './Pagination';
class Right extends Component {
	render() {
		return(
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<div className="panel panel-default ">
						<div className="panel-heading">新闻列表</div>
						<div className="panel-body" >

							<table className="table">
								<thead>
									<tr>
										<th>id</th>
										<th>新闻标题</th>
										<th>新闻时间</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody id="newstbody">
									<tr className="newstr">
										<th className="newsid" scope="row">1</th>
										<td className="newstitle">你的名字</td>
										<td className="newsdate">2017-06-02</td>
										<td className="newsbutton"><button className="btn btn-danger">删除</button></td>


									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td>Larry</td>
										<td>the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="panel-footer">
							<Pagination />
						</div>
					</div>
				</div>
		);
	}
}

export default Right;

