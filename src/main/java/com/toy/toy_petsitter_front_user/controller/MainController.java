package com.toy.toy_petsitter_front_user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
public class MainController {

    /*
    로그인
     */
    @GetMapping("/")
    public  String login() {
        return "login";
    }

    /*
    일반회원 회원가입
     */
    @GetMapping("/signInUser")
    public String signInUser() {
        return "signUp/signUpUser";
    }

    /*
    펫시터 회원가입
     */
    @GetMapping("/signUpPetsitter")
    public String signUpPetsitter() {
        return "signUp/signUpPetsitter";
    }

    /*
    메인 페이지
     */
    @GetMapping("/main")
    public String mainPage() {
        return "petsitter/petsitList";
    }

    /*
    상세 페이지
     */
    @GetMapping("/petsitDetail/{petsitSeq}")
    public String petsitDetail(
            @PathVariable(required = false) String petsitSeq, Model model) {
        model.addAttribute("petsitSeq", petsitSeq);
        return "petsitter/petsitDetail";
    }

    /*
    마이 페이지
     */
    @GetMapping("/myPage")
    public String myPage() {
        return "myInfo/myPage";
    }

    /*
    예약 내역
     */
    @GetMapping("/reservation")
    public String reservation() {
        return "myInfo/reservation";
    }

    /*
    예약 관리
     */
    @GetMapping("/reservationManage")
    public String reservationManage() {
        return "myInfo/reservationManage";
    }

    /*
    내 작성글
     */
    @GetMapping("/myPost")
    public String myPost() {
        return "myInfo/myPost";
    }

}
