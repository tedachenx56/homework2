import React, {	Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<div className="panel panel-default ">
						<div className="panel-heading">新闻生成器</div>
						<div className="panel-body">
							<form>
								<div className="form-group">
									<label htmlFor="newstitle">新闻标题 </label>
									<input type="text" className="form-control news" id="newstitle" placeholder="title" />
								</div>
								<div className="form-group">
									<label htmlFor="newscontent">新闻正文 </label>
									<textarea name="" rows="3" cols="" id="newscontent" placeholder="content" className="form-control news"></textarea>
								</div>
								<div className="form-group">
									<label htmlFor="newsimageurl">新闻图片地址 </label>
									<input type="url" className="form-control news" id="newsimageurl" placeholder="http://www.baidu.com/imageurl" />
								</div>
								<div className="form-group">
									<label htmlFor="newsfrom">新闻来源 </label>
									<input type="text" className="form-control news" id="newsfrom" placeholder="from" />
								</div>
								<div className="form-group">
									<label htmlFor="newsdate">新闻日期 </label>
									<input type="date" className="form-control news" id="newsdate" placeholder="2017-01-01" />

								</div>
								<div className="form-group">
									<label htmlFor="newstag">新闻标签</label>
									<input type="text" className="form-control news" id="newstag" placeholder="tag"/>
{
//									<select className="form-control news" id="newstag">
//										<option selected="">推荐</option>
//										<option>百家</option>
//										<option>本地</option>
//										<option>娱乐</option>
//										<option>社会</option>
//										<option>军事</option>
//										<option>搞笑</option>
//										<option>女人</option>
//										<option>互联网</option>
//										<option>科技</option>
//										<option>生活</option>
//										<option>国际</option>
//										<option>国内</option>
//										<option>体育</option>
//										<option>汽车</option>
//										<option>财经</option>
//										<option>房产</option>
//										<option>时尚</option>
//										<option>教育</option>
//										<option>游戏</option>
//										<option>旅游</option>
//										<option>人文</option>
//										<option>创意</option>
//
//									</select>
}
								</div>
								<button type="button" className="btn btn-primary newssend" id="newssubmit">提交</button>
								<button type="button" className="btn btn-info newssend" id="newssave">保存</button>
								<button type="button" className="btn btn-primary" id="clear">清空</button>
								<button type="button" id="btnid1">test</button>
									<div className="dataid" id="dataid" ></div>
							</form>
						</div>
					</div>
				</div>
		);
	}
}

export default Header;

