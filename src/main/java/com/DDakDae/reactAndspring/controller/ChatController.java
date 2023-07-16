package com.DDakDae.reactAndspring.controller;

import com.DDakDae.reactAndspring.dto.AxiosMessageDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class ChatController {

    @ResponseBody
    @PostMapping("/api/chat")
    public AxiosMessageDto response2SendMessage(@RequestBody AxiosMessageDto dto) {
        
        // dto를 openai에 넘겨서 쿼리문 변환하는 기능
        
        // 해당 쿼리문으로 db에서 정보를 찾아오는 기능
        
        AxiosMessageDto response = new AxiosMessageDto("동근", "동근 파이팅!!");
        return response;
    }

    private String message2Query() {


        return null;
    }
}
