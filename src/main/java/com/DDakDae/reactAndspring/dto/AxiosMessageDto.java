package com.DDakDae.reactAndspring.dto;

public class AxiosMessageDto {

    private String role;
    private String content;

    public AxiosMessageDto(){
        // 기본 생성자
    }

    public AxiosMessageDto(String role, String content) {
        this.role = role;
        this.content = content;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
