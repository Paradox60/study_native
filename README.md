# study_native

Минимальный проект **FastAPI + React Native (Expo)**

## Запуск проекта

### Backend (FastAPI + Docker)
Сборка и запуск:
```bash
docker-compose up --build
```
После запуска API будет доступен по адресу:
```
http://Your_ip:8000
```
Установи свой ip в mobile/config.js
```
### Frontend (React Native + Expo)
Переходим в папку mobile и запускаем Expo:
```bash
cd mobile
npx expo start
```
Сканируйте QR-код через приложение Expo Go на телефоне. Приложение будет автоматически обращаться к API по адресу, указанному в config.js.

## Как получить IP вашей машины

### Linux
```bash
hostname -I | awk '{print }'
```

### Windows (PowerShell)
```powershell
ipconfig | Select-String "IPv4"
```



### Примечания
- Если мобильное приложение и сервер на разных устройствах, убедитесь, что они в одной сети.
- В случае ошибок соединения проверьте firewall.
