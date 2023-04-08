/**
 * 페이지네이션 공통 js
 */

class Pagination {
    constructor(page, targetId, pageSize, totalPage, first, last) { //현재 페이지, seq, 한 페이지 당 표현되는 데이터 수, 총 페이지 수
        this.page = page;
        this.targetId = targetId;
        this.pageSize = pageSize; //5?
        this.totalPage = totalPage;
        this.first = first;
        this.last = last;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>this.page = page;"+this.page)
    }

    //필요한 데이터
    //현재 페이지
    //총 데이터 갯수
    //한 페이지 당 표현되는 데이터 갯수
    //총 페이지 수

    paging() {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>this.page = page();"+this.page)
        //총 페이지 수가 표현되어야 하는 페이지 수(5)보다 작으면
        if(this.totalPage < this.pageSize) {
            console.log(">>>>>>>>총 페이지 수가 표현되어야 하는 페이지 수(5)보다 작으면")
            this.pageSize = this.totalPage; //표현되어야 하는 페이지 수 = 총 페이지 수 ex) 지금 데이터 28개 총 페이지수 3개 = 표현되어야 하는 페이지 수 3개
            console.log(">>>>>>>>>>>this.totalPage"+this.totalPage) //3
            console.log(">>>>>>>>>>>this.pageSize"+this.pageSize) //3
        }

        //화면에 보여질 마지막 페이지
        let last = this.last;
        let pageGroup = Math.ceil(this.page / this.pageSize); //페이지 그룹 1 / 5 = 5
        let lastt = pageGroup * this.pageSize
        console.log(">>>>>>>>>>>>>>>pageGroup:"+pageGroup);
        console.log(">>>>>>>>>>>>>>>lastt:"+lastt);


        //화면에 보여질 마지막 페이지가 총 페이지 수 보다 크면
        if(last > this.totalPage) { //3 //3
            console.log(">>>>>>>이건 안 타야함")
            last = this.totalPage //마지막 페이지 = 총 페이지
        }

        //화면에 보여질 첫 페이지 번호
        let first = this.first;
        let firstt = lastt - (this.pageSize - 1);
        console.log(">>>>>>>>>>>>firstt:"+firstt)

        //맨 끝과 맨 처음으로 이동
        let next = last + 1; //마지막 페이지 +1
        let prev = first -1; //첫 페이지 -1

        //페이지 관련 html 코드가 입력될 곳
        let pageHtml = ''

        //이전 페이지가 존재하면??
        console.log(">>>>>>>>>>>>prev"+prev);
        console.log(">>>>>>>>>>>>next"+next);
        if(prev > 0) {
            pageHtml += `<span><a class="page-link" id="prev"><i class="fa-solid fa-angle-left"></i></a></span>`;
        }

        //페이지 번호 표시
        for(var i = first; i <= last; i++) {
            //현재 페이지는 색상 및 폰트 변경
            if(this.page === i) { //현재 페이지 = 색상, 폰트 굵기 변경
                console.log(">>>>>>>>>>i&this.page"+i+this.page)
                // pageHtml += `<li class="paginate_button page-item active" style="cursor: pointer;" id="${this.targetId + "_" + i}"><a class="page-link">${i}</a></li>`;
                pageHtml += `<span class="active" style="margin-left: 15px;"><a class="page-link" id="${i}">${i}</a></span>`;
            } else {
                // pageHtml += `<li class="paginate_button page-item" style="cursor: pointer;" id="${this.targetId + "_" + i}"><a class="page-link">${i}</a></li>`;
                pageHtml += `<span id="num" style="margin-left: 15px;"><a class="page-link" id="${i}">${i}</a></span>`;
            }
        }

        //총 페이지 수 보다 last가 작은 경우 //ex) 데이터 총63개, 한 페이지에 데이터 10개씩 표현, 총 페이지 수 7. 여기서 last는5
        if(last < this.totalPage) { //다음 그룹으로 이동한는 화살표. 맨 마지막 그룹일 경우 표시되지 않는다
            pageHtml += `<span><a class="page-link" id="next"><i class="fa-solid fa-angle-right" style="margin-left: 15px"></i></a></span>`;
        }

        console.log(">>>>>>>>>>>>>return:next"+next);
        console.log(">>>>>>>>>>>>>return:prev"+prev);

        return {
            htmls: pageHtml,
            next: next,
            prev: prev
        }
    }




}