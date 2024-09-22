SELECT MCDP_CD AS '진료과코드', COUNT(date_format(APNT_YMD, '%Y-%m')) AS '5월예약건수'
FROM APPOINTMENT
WHERE date_format(APNT_YMD, '%Y-%m') = '2022-05'
GROUP BY MCDP_CD
ORDER BY COUNT(date_format(APNT_YMD, '%Y-%m')), MCDP_CD ASC