select count(user_id)
from user_info
where date_format(joined, '%Y') = 2021 AND age between 20 and 29