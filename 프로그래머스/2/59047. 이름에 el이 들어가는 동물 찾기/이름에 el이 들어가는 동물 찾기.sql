select animal_id, name
from animal_ins
where name like '%el%' AND animal_type = 'Dog'
order by name