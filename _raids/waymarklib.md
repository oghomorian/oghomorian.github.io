---
title: WaymarkLibrarian 사용법
layout: default
permalink: /waymarks/
---

## WaymarkLibrarian

[사이트 바로가기](https://github.com/PunishedPineapple/WaymarkLibrarian)

### 목적
위치표식 관련 프리셋을 저장/불러오기 할 수 있는 프로그램입니다. 해당 프로그램은 사용자 설정 파일(...\Documents\My Games\FINAL FANTASY XIV - KOREA) 내 위치표식 관련 데이터를 읽어들여 위치표식 관련 정보를 저장하거나 불러올 수 있게 합니다. 해당 프로그램 사용 전 게임은 실행 중이지 않아야 합니다.

### 사용법

1. 최신 [릴리즈](https://github.com/PunishedPineapple/WaymarkLibrarian/releases) 를 다운로드합니다. Netwonsoft.Json.dll은 exe 파일과 같은 위치에 있어야 합니다.
2. 프로그램 처음 실행 시 캐릭터 설정을 백업하고, 업데이트 설정 파일 문구가 뜬다면 업데이트를 진행합니다.
3. 사용자 설정 파일 위치를 지정합니다. 일반적인 경우 "...\Documents\My Games\FINAL FANTASY XIV - KOREA" 에 위치합니다.
4. Active Character 항목의 "FFXIV_CHR..." 로 되어있는 캐릭터 설정 파일 중 희망하는 파일을 찾아야합니다.
    - 어떤 폴더가 어떤 캐릭터 파일인지 확인하는 가장 일반적인 방법은 다음과 같습니다: 해당 캐릭터에 로그인 후, 매크로를 아무거나 하나 추가합니다. 탐색기를 이용하여 MACRO.DAT 파일의 "수정한 날짜" 가 현재 시각으로 변경 된 폴더를 찾습니다.
5. Set Alias 기능을 이용해 알아보기 쉬운 이름으로 지정해 저장할 수 있습니다.
6. Current Presets 에 저장되어 있는 슬롯은 다음과 같이 활용할 수 있습니다.
    - Copy to Library 를 이용하여 프로그램에 해당 슬롯 데이터를 저장합니다.
    - Copy to Game 을 이용하여 프로그램에 미리 저장되어 있는 데이터를 옮겨옵니다.
7. Preset 설정이 끝났다면 반드시 **Write Game File** 을 눌러 저장하십시오.
8. Preset Library 에는 내가 프로그램에 저장해둔 위치표식 프리셋 목록이 표시됩니다. 이 데이터는 게임에서 직접적으로 활용은 불가능한 단순 데이터 목록입니다.
9. Import 를 눌러 공략 문서에 기록되어 있는 프리셋 데이터 ({"Name":..., "MapID":...} 등으로 기록되어 있는 JSON 형태 데이터) 를 붙여넣어 Preset  Library에 추가 가능합니다.
10. Preset Library에 저장되어 있는 데이터 중 원하는 데이터를 클릭하면, 미리보기 및 위치표식의 지정 위치 데이터 등을 확인할 수 있습니다.

### 주의사항

본 프로그램은 글로벌 서버에 맞추어 개발되었기 때문에 업데이트 상황에 따라 한국 서버에서는 적용이 불가능 할 수 있습니다.