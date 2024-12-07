module Jekyll
  module DateFilter
    MONTHS = %w[stycznia lutego marca kwietnia maja czerwca lipca sierpnia września października listopada grudnia]

    def polish_date(input)
      date = Date.parse(input.to_s)
      "#{date.day} #{MONTHS[date.month - 1]} #{date.year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)